import React, { Fragment } from 'react'

function FragMentComp() {
  return (
    // Fragment 태그와 <> 태그는 컴파일 시 삭제된다
    <Fragment>
      <h3>FragMentComp</h3>

      <>
        Good Morning<br />
        Good Afternoon<br />
      </>
    </Fragment>
  )
}

export default FragMentComp
