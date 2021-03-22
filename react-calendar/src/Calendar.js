import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useDispatch, useSelector } from 'react-redux';
import { getCalendarFB } from './redux/modules/calendar';

function Calendar(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.calendar.list);
  useEffect(() => {
    dispatch(getCalendarFB());
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const data_list = data.map((val) => {
    return {
      title: val.title,
      date: val.date,
      publicId: val.id,
      completed: false,
    };
  });
  const get_data = data_list;
  // console.log(data); 이거 리랜더링 여러번되는거 고쳐야함
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          start: 'prev,next',
          center: 'title',
          end: 'today',
        }}
        titleFormat={{ year: 'numeric', month: 'short' }}
        events={get_data}
        eventClick={(e) => {
          props.history.push('/detail/' + e.event._def.extendedProps.publicId);
        }}
      />
    </div>
  );
}

export default Calendar;
