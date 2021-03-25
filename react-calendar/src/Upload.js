import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addCalendarFB } from './redux/modules/calendar';
function Upload(props) {
  const dateTime = useRef();
  const plan = useRef();

  const dispatch = useDispatch();

  const addContent = () => {
    const new_item = {
      date: dateTime.current.value,
      title: plan.current.value,
      completed: false,
    };
    if (new_item.date === '') {
      window.alert('날짜를 입력해주세요');
      return;
    } else if (new_item.title === '') {
      window.alert('일정을 입력해주세요');
      return;
    }
    dispatch(addCalendarFB(new_item));
    window.alert('할일이 추가되었습니다!');
    props.history.push('/');
    return;
  };

  return (
    <>
      <Container>
        <Modal>
          <h1>
            <BorderColorIcon /> &nbsp;일정 추가하기
          </h1>
          <hr />
          <TextField
            style={{ marginBottom: '3rem' }}
            label='날짜를 추가해주세요'
            type='datetime-local'
            defaultValue='0000-00-00T00:00'
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={dateTime}
          />
          <input
            type='text'
            style={{
              borderRadius: '5px',
              border: '1px solid #888',
              padding: '16px',
              fontSize: '16px',
              marginBottom: '3rem',
            }}
            placeholder='일정을 입력해주세요.'
            ref={plan}
          />

          <BtnGroup>
            <Button
              variant='contained'
              style={{ marginRight: '50px' }}
              onClick={() => {
                props.history.goBack();
              }}
            >
              뒤로가기
            </Button>
            <Button
              variant='contained'
              color='primary'
              style={{ marginTop: '5px' }}
              onClick={addContent}
            >
              일정 추가
            </Button>
          </BtnGroup>
        </Modal>
      </Container>
      <Container2
        onClick={() => {
          props.history.replace('/');
        }}
      />
    </>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 24px 50px;
  border-radius: 4px;
  width: 800px;
  height: 400px;
  box-sizing: border-box;
  z-index: 10;
  & h1 {
    text-align: center;
    color: #af7ac5;
  }

  & Button {
    min-width: 200px;
  }
`;
const BtnGroup = styled.div`
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    & Button {
      width: 100%;
    }
  }
`;

export default Upload;
