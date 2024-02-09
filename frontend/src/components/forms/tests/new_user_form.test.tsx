import { render } from "@testing-library/react";
import { NewUserForm } from "../new_user_form";


describe("<NewUserForm> Checking for all the labels",()=>{
    it("New User Form Label",()=>{
        const { getByText } = render(<NewUserForm/>)
        const textElement = getByText(/New User Form/i);
        expect(textElement).toBeInTheDocument();
        
    });
    it("Enter your name label",()=>{
        const { getByText } = render(<NewUserForm/>)
        const textElement = getByText(/Enter your Name:/i);
        expect(textElement).toBeInTheDocument();
        
    })
    it("Enter your username Label",()=>{
        const { getByText } = render(<NewUserForm/>)
        const textElement = getByText(/Enter your Username:/i);
        expect(textElement).toBeInTheDocument();
        
    })
    it("Enter your Email label",()=>{
        const { getByText } = render(<NewUserForm/>)
        const textElement = getByText(/Enter your Email:/i);
        expect(textElement).toBeInTheDocument();
        
    })
    it("CoverImageUrl label",()=>{
        const { getByText } = render(<NewUserForm/>)
        const textElement = getByText(/Enter your CoverImageUrl:/i);
        expect(textElement).toBeInTheDocument();
        
    })
    it("ProfileImageUrl label",()=>{
        const { getByText } = render(<NewUserForm/>)
        const textElement = getByText(/Enter your ProfileImageUrl:/i);
        expect(textElement).toBeInTheDocument();
        
    })

})