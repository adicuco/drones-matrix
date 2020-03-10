/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from 'components/Button';
import Form from 'components/Form';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Matrix = styled.div`
  display: flex;
  flex-direction: column;
`;

const MatrixItem = styled.div`
  height: 5em;
  width: 5em;
  margin: 0.5em;
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.primary : theme.secondary};
  transition: all 0.2s ease-in-out;

  & :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const RowFlex = styled.div`
  display: flex;
`;

const Code = styled.textarea`
  background: ${({ theme }) => theme.body};
  border: 0.4em solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  font-size: 1em;
`;

const HomePage = () => {
  const [grid, setGrid] = useState(0);
  const [matrix, setMatrix] = useState([]);
  const [code, setCode] = useState('');

  useEffect(() => {
    createMatrix();
  }, [grid]);

  const createMatrix = () => {
    let newMatrix = [];
    for (let row = 0; row < grid; row++) {
      newMatrix.push([]);
      for (let column = 0; column < grid; column++) {
        newMatrix[row].push(false);
      }
    }
    setMatrix(newMatrix);
  };

  const handleGenerateCode = () => {
    let selected = [];

    for (let row = 0; row < grid; row++) {
      for (let column = 0; column < grid; column++) {
        if (matrix[row][column]) {
          selected.push({ x: column, y: row });
        }
      }
    }
    setCode(JSON.stringify(selected));
  };

  return (
    <Container>
      <h1>Drones Matrix</h1>
      {grid > 0 ? (
        <>
          <RowFlex>
            <Button
              title="Change Size"
              nClick={() => {
                setGrid(0);
                setCode('');
              }}
            />
            <Button
              title="Reset"
              onClick={() => {
                createMatrix();
                setCode('');
              }}
            />
          </RowFlex>
          <Matrix>
            {matrix.map((row, rowIndex) => (
              <RowFlex key={rowIndex}>
                {row.map((value, columnIndex) => (
                  <MatrixItem
                    key={columnIndex}
                    isSelected={value}
                    onClick={() => {
                      let newMatrix = [...matrix];
                      newMatrix[rowIndex][columnIndex] = !newMatrix[
                        rowIndex
                      ][columnIndex];
                      setMatrix(newMatrix);
                    }}
                  />
                ))}
              </RowFlex>
            ))}
          </Matrix>
          <Button
            title="Generate code"
            reverse
            onClick={handleGenerateCode}
          />
          {code.length > 0 && (
            <Code
              rows={code.length > 70 ? code.length / 70 + 1 : 1}
              cols={Math.min(code.length, 70)}
              value={code}
              readOnly
            />
          )}
        </>
      ) : (
        <Form
          fields={[
            {
              name: 'grid',
              placeholder: 'Matrix size',
              required: true,
              type: 'number',
            },
          ]}
          onSubmit={data => {
            setGrid(parseInt(data.grid, 10));
          }}
          text="Generate Matrix"
        />
      )}
    </Container>
  );
};

export default HomePage;
