//we have to achive safe area view insaid the android we use statusbar insaid our code
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components";
//achive safe area view by using statusbar insaid status bar we have thing called
//constants the thing constant which is having the currentheight property using these property
//we have to achive the safeareaview in our android safearea.
export const SafeArea = styled(SafeAreaView)`
flex: 1;
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
background-color: ${(props) => props.theme.colors.bg.primary};
`;