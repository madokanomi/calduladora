import Input from './components/input';
import Button from './components/button'

import { Container, Content, Row, Column } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState('0');

  const handleOnClear = () => {
    setCurrentNumber('0')
  };
  const handleAddNumber = (number) => {

    setCurrentNumber(prev => `${number} ${prev === '0' ? '': prev}`)
  }

  const handleSumNumber = () => {
    if(firstNumber == '0'){
      setFirstNumber(currentNumber)
      handleOnClear();
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
    }
  }
  return (
    <Container>
      <Content>  
        <Input value={currentNumber} />
        <Row>
        <Button label="x"/>
        <Button label="/"/>
        <Button label="C" onClick={handleOnClear}/>
        <Button label="X"/>
        </Row>
        <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9"onClick={() => handleAddNumber('')} />
        <Button label="- " onClick={() => handleAddNumber('')}/>
        </Row>
        <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="+" onClick={handleSumNumber}/>
        </Row>
        <Row>
        <Button label="1" onClick={() => handleAddNumber('1')} />
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={() => handleAddNumber('=')}/>
        </Row>
      </Content>
   
    </Container>
  );
}

export default App;
