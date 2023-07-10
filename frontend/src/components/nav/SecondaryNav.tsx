import {Link as RouterLink} from "react-router-dom";
import {Box, Link} from "@chakra-ui/react";


export default function SecondaryNav(){

    return (
        <>
            <Box display="flex" flexDirection="column" paddingTop="10" paddingLeft="10" paddingRight="10" rowGap={8}>
                <Link as={RouterLink} to={"/requirements"}>Requirements</Link>
                <Link as={RouterLink} to={"/user-stories"}>User Stories</Link>
                <Link as={RouterLink} to={"/use-cases"}>Use Cases</Link>
            </Box>
        </>
    )
}