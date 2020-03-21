/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import Form from 'components/Form';

import colors from 'constants/colors';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Matrix = styled.div`
  display: flex;
  flex-direction: column;
`;

const MatrixItem = styled.div`
  height: 5em;
  width: 5em;
  margin: 0.5em;
  background: ${({ isSelected, theme, color }) =>
    isSelected ? color : theme.secondary};
  transition: all 0.2s ease-in-out;
  color: black;
  justify-content: center;
  display: flex;
  align-items: center;
  font-weight: bold;

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
  margin-bottom: 2em;
`;

const HomePage = () => {
  const [grid, setGrid] = useState(0);
  const [matrix, setMatrix] = useState([]);
  const [code, setCode] = useState('');
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    createMatrix();
  }, [grid]);

  const createMatrix = () => {
    let id = 1;
    let newMatrix = [];
    for (let row = 0; row < grid; row++) {
      newMatrix.push([]);
      for (let column = 0; column < grid; column++) {
        newMatrix[row].push({ id, isSelected: false });
        id++;
      }
    }
    setMatrix(newMatrix);
  };

  const handleGenerateCode = () => {
    let selected = [];

    selected = drones.map((drone, i) => ({
      x: drone.x,
      y: drone.y,
      drone: `d${i + 1}`,
    }));
    setCode(JSON.stringify(selected).replace(/"/g, ''));
  };

  return (
    <Container>
      <h1>Drones Matrix</h1>
      {grid > 0 ? (
        <>
          <RowFlex>
            <Button
              title="Change Size"
              onClick={() => {
                setGrid(0);
                setCode('');
              }}
            />
            <Button
              title="Reset"
              onClick={() => {
                createMatrix();
                setCode('');
                setDrones([]);
              }}
            />
          </RowFlex>
          <Matrix>
            {matrix.map((row, rowIndex) => (
              <RowFlex key={rowIndex}>
                {row.map((drone, columnIndex) => (
                  <MatrixItem
                    color={
                      colors[drones.findIndex(d => drone.id === d.id)]
                    }
                    key={columnIndex}
                    isSelected={drone.isSelected}
                    onClick={() => {
                      let newMatrix = [...matrix];
                      const isSelected = !newMatrix[rowIndex][
                        columnIndex
                      ].isSelected;

                      newMatrix[rowIndex][
                        columnIndex
                      ].isSelected = isSelected;

                      let newDrones = [...drones];
                      if (isSelected) {
                        newDrones.push({
                          id: drone.id,
                          x: columnIndex,
                          y: rowIndex,
                        });
                      } else {
                        newDrones = newDrones.filter(
                          d => d.id !== drone.id
                        );
                      }
                      setDrones(newDrones);
                      setMatrix(newMatrix);
                    }}
                  >
                    {drones.findIndex(d => drone.id === d.id) > -1
                      ? `d${drones.findIndex(d => drone.id === d.id) +
                          1}`
                      : ''}
                  </MatrixItem>
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
