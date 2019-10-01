import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
const { height, width } = Dimensions.get("window");
import { colors } from 'config/colors'

export const CardInfo = styled.View`
    width: ${width};
    height:${width / 4.5};
    flex-direction: column;
    background-color: white;
    padding: 5px;
    justify-content: flex-start;
`;

export const Card = styled.View`
    width: ${width};
    height:${width / 4};
    flex-direction: row;
    align-items: center;
    margin-left:5px;
    margin-right: 5px;
    border-radius: 10px;
    background-color: #fff;
    elevation: 3px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const Separator = styled.View`
    width: ${width};
    height:1;
    background-color: #c5c5c5;
`;

export const Thumb = styled.Image.attrs(props => ({
    source: props.src,
}))`
    width: ${width / 4};
    height:${width / 4};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: white
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${colors.colorFont};
    font-weight: bold;
`;

export const Description = styled.Text`
    font-size: 13px;
    color: ${colors.colorFont};
    font-weight: bold;
`;

export const TextFooter = styled.Text`
    font-size: 10px;
    position: absolute;
    bottom: 1;
    left:5;
    color: ${colors.colorFontFooter};
    font-weight: bold;
`;

export const CardSugestao = styled.View`
    width: ${width / 1.5};
    height:${width / 2};
    flex-direction: column;
    border-radius: 5px;
    
    margin-left: 5px;
    margin-right: 5px;

`;

export const ThumbSugestao = styled.Image.attrs(props => ({
    source: props.src,
}))`
    width: ${width / 1.5};
    height:${width / 3};
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: white
`;

export const ContainerSugestao = styled.View`
    height:${width / 1.8};
    margin-top : 10px;
    margin-bottom: 5px;
`;


