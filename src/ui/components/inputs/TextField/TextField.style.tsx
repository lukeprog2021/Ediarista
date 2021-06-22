import { experimentalStyled as Styled } from "@material-ui/core";

import { TextField } from "@material-ui/core";

export const TextFieldStyled = Styled(TextField)`
    .MuiInputBase-root{
        background-color:${({ theme }) => theme.palette.grey[50]};

    }
    .MuiOutlineInput-notchedOutline{
        border-color:${({ theme }) => theme.palette.grey[100]};
    }
    
`;
