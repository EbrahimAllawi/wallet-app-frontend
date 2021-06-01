import { Result, Button } from 'antd';

function backHome() {
    document.location.href = "/"
}

export default function NotFound() {
    return (
        <>
        <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button onClick={()=> backHome()} type="primary">Back Home</Button>}
        />
        </>
    )
}