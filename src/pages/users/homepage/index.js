import { memo} from "react" // 
const HomePage = () => {
    return 
    <>
    <h1></h1> { /* No render */ }
    <h1></h1> {/*  render */ } 
    <h1></h1> {/* No render */}
    </>;
}

export default memo(HomePage);