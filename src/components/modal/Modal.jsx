import { StyledPopUp, StyledShadow } from "./style";


const Modal = ({ handlePopup, children }) => {


    const preventBubbling = (event) => event.stopPropagation();

    return (
        <StyledShadow onClick={handlePopup}>
            <StyledPopUp onClick={preventBubbling}>
                {children}
            </StyledPopUp>
        </StyledShadow>
    );

};

export default Modal;
