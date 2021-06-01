import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import EditOperation from './EditOperation';

function MyVisible(props:any) {

   useEffect(() => {
      document.getElementById('modalEdit')?.style.setProperty('display', 'grid')
   },[props.isShowEditR])
   
   return (
      <>
         {props.isShowEditR? <EditOperation /> : null}
      </>
   );
}

const stateToProps = (state: any) => {
   return state
}

export default connect(stateToProps)(MyVisible);