import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import SearchIcon from '@material-ui/icons/Search';
import { Fab } from '@material-ui/core';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getCalendarFB } from './redux/modules/calendar';

function Calendar(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.calendar.list);

  useEffect(() => {
    dispatch(getCalendarFB());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data_list = data.map((val) => {
    return {
      title: val.title,
      date: val.date,
      publicId: val.id,
      completed: val.completed,
    };
  });

  const completedDate = data_list.filter((val) => {
    return val.completed === true;
  });
  const [btn, setBtn] = useState(true);
  const btnEvent = () => {
    setBtn(!btn);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          start: 'prev next today',
          center: 'title',
          end: '',
        }}
        titleFormat={{ year: 'numeric', month: 'short' }}
        events={btn ? data_list : completedDate}
        eventClick={(e) => {
          props.history.push('/detail/' + e.event._def.extendedProps.publicId);
        }}
        eventColor={'#ABEBC6'}
        height={'100vh'}
      />
      <PositionBtn>
        <Fab
          color='secondary'
          aria-label='filter'
          variant='extended'
          onClick={btnEvent}
        >
          <SearchIcon />
          <p style={{ fontSize: '1rem' }}>
            {btn ? '완료된 일정 보기' : '모든 일정 보기'}
          </p>
        </Fab>
      </PositionBtn>
    </div>
  );
}
const PositionBtn = styled.div`
  position: fixed;
  top: 80%;
  right: 10px;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    top: 70%;
    left: 10px;
    & p {
      display: none;
    }
  }
`;
export default Calendar;
