import React from 'react';

type ErrorProps = {
    errorDescription?:string
}
const Error = ({errorDescription}:ErrorProps) => {
    return <h1>{errorDescription || '에러가 발생했습니다.'}</h1>
}

export default Error;