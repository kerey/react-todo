import {FC} from "react";
import {Header} from "../../components/organisms/Header";
import {Footer} from "../../components/organisms/Footer";


export const MainTemplate: FC = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}
