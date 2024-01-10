import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 16px 22px 16px 12px;
    background: ${props => props.theme.color.primary_black_2};
    gap: 20px;
    width: 100%;

    @media screen and (min-width: 834px) {
      padding: 24px 138px 24px 40px;
      gap: 32px;
    }

    @media screen and (min-width: 1440px) {
      padding: 24px 86px 24px 40px;
    }
  }

  li {
    display: flex;
    gap: 20px;
    align-items: center;

    .buble-svg{
      display: block;
    }

    .bubble-div{
      display: none;
    }
  
    @media screen and (min-width: 834px) {
      .buble-svg{
      display: none;
    }

      .bubble-div{
      display: block;
      position: relative;
      width: 80px;
      height: 80px;

      .buble-1{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
      }
      .buble-2{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }
      .buble-3{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }
    }

      .buble-1 {
        -webkit-animation: linear infinite both;
        animation: slide-out-top-buble-1 3s linear infinite both;
      }
  
      @-webkit-keyframes slide-out-top-buble-1 {
        0% {
          -webkit-transform: translate(0px, 40px);
          transform: translate(0px, 40px);
          scale: 1;
          stroke-width: 1.5;
          opacity: 0;
        }
        25% {
          -webkit-transform: translate(-5px, 20px);
          transform: translate(-5px, 20px);
          stroke-width: 1;
          scale: 1.1;
          opacity: 0.5;
        }
        50% {
          -webkit-transform: translate(5px, 0px);
          transform: translate(5px, 0px);
          stroke-width: 1.5;
          scale: 1;
          opacity: 1;
        }
        75% {
          -webkit-transform: translate(-5px, -15px);
          transform: translate(-5px, -15px);
          stroke-width: 1;
          scale: 1.1;
          opacity: 0.5;
        }
        100% {
          -webkit-transform: translate(0px, -30px);
          transform: translate(0px, -30px);
          stroke-width: 1.5;
          scale: 1;
          opacity: 0;
        }
      }
      @keyframes slide-out-top-buble-1 {
        0% {
          -webkit-transform: translate(0px, 40px);
          transform: translate(0px, 40px);
          scale: 1;
          stroke-width: 1.5;
          opacity: 0;
        }
        25% {
          -webkit-transform: translate(-5px, 20px);
          transform: translate(-5px, 20px);
          stroke-width: 1;
          scale: 1.1;
          opacity: 0.5;
        }
        50% {
          -webkit-transform: translate(5px, 0px);
          transform: translate(5px, 0px);
          stroke-width: 1.5;
          scale: 1;
          opacity: 1;
        }
        75% {
          -webkit-transform: translate(-5px, -15px);
          transform: translate(-5px, -15px);
          stroke-width: 1;
          scale: 1.1;
          opacity: 0.5;
        }
        100% {
          -webkit-transform: translate(0px, -30px);
          transform: translate(0px, -30px);
          stroke-width: 1.5;
          scale: 1;
          opacity: 0;
        }
      }


      .buble-2 {
        -webkit-animation: linear infinite both;
        animation: slide-out-top-buble-2 2s linear infinite both;
      }
  
      @-webkit-keyframes slide-out-top-buble-2 {
        0% {
          -webkit-transform: translate(0px, 20px);
          transform: translate(0px, 20px);
          scale: 1;
          stroke-width: 1.5;
          opacity: 0;
        }
        25% {
          -webkit-transform: translate(2px, 0px);
          transform: translate(2px, 0px);
          stroke-width: 1;
          scale: 1.1;
          opacity: 0.5;
        }
        50% {
          -webkit-transform: translate(-2px, -20px);
          transform: translate(-2px, -20px);
          stroke-width: 1.5;
          scale: 1;
          opacity: 1;
        }
        75% {
          -webkit-transform: translate(2px, -40px);
          transform: translate(2px, -40px);
          stroke-width: 1;
          scale: 1.1;
          opacity: 0.5;
        }
        100% {
          -webkit-transform: translate(0px, -60px);
          transform: translate(0px, -60px);
          stroke-width: 1.5;
          scale: 1;
          opacity: 0;
        }
      }
      @keyframes slide-out-top-buble-2 {
        0% {
          -webkit-transform: translate(0px, 20px);
          transform: translate(0px, 20px);
          scale: 1;
          stroke-width: 1.5;
          opacity: 0;
        }
        25% {
          -webkit-transform: translate(2px, 0px);
          transform: translate(2px, 0px);
          stroke-width: 1;
          scale: 1.1;
          opacity: 0.5;
        }
        50% {
          -webkit-transform: translate(-2px, -20px);
          transform: translate(-2px, -20px);
          stroke-width: 1.5;
          scale: 1;
          opacity: 1;
        }
        75% {
          -webkit-transform: translate(2px, -40px);
          transform: translate(2px, -40px);
          stroke-width: 1;
          scale: 1.1;
          opacity: 0.5;
        }
        100% {
          -webkit-transform: translate(0px, -60px);
          transform: translate(0px, -60px);
          stroke-width: 1.5;
          scale: 1;
          opacity: 0;
        }
      }


      .buble-3 {
        -webkit-animation: linear infinite both;
        animation: slide-out-top-buble-3 4s linear infinite both;
      }
  
      @-webkit-keyframes slide-out-top-buble-3 {
        0% {
          -webkit-transform: translate(0px, 10px);
          transform: translate(0px, 10px);
          scale: 1;
          stroke-width: 1.5;
          opacity: 0;
        }
        25% {
          -webkit-transform: translate(2px, -10px);
          transform: translate(2px, -10px);
          stroke-width: 1;
          scale: 1.1;
          opacity: 0.5;
        }
        50% {
          -webkit-transform: translate(-2px, -30px);
          transform: translate(-2px, -30px);
          stroke-width: 1.5;
          scale: 1;
          opacity: 1;
        }
        75% {
          -webkit-transform: translate(2px, -50px);
          transform: translate(2px, -50px);
          stroke-width: 1;
          scale: 1.1;
          opacity: 0.5;
        }
        100% {
          -webkit-transform: translate(0px, -75px);
          transform: translate(0px, -75px);
          stroke-width: 1.5;
          scale: 1;
          opacity: 0;
        }
      }
      @keyframes slide-out-top-buble-3 {
        0% {
          -webkit-transform: translate(0px, 10px);
          transform: translate(0px, 10px);
          scale: 1;
          stroke-width: 1.5;
          opacity: 0;
        }
        25% {
          -webkit-transform: translate(2px, -10px);
          transform: translate(2px, -10px);
          stroke-width: 1;
          scale: 1.1;
          opacity: 0.5;
        }
        50% {
          -webkit-transform: translate(-2px, -30px);
          transform: translate(-2px, -30px);
          stroke-width: 1.5;
          scale: 1;
          opacity: 1;
        }
        75% {
          -webkit-transform: translate(2px, -50px);
          transform: translate(2px, -50px);
          stroke-width: 1;
          scale: 1.1;
          opacity: 0.5;
        }
        100% {
          -webkit-transform: translate(0px, -75px);
          transform: translate(0px, -75px);
          stroke-width: 1.5;
          scale: 1;
          opacity: 0;
        }
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    color: ${props => props.theme.color.primary_grey};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 4px;
  }

  p {
    font-size: 34px;
    font-weight: 600;
    line-height: 1.1;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  span {
    color: ${props => props.theme.color.primary_grey};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    margin-left: 4px;
  }


  @media screen and (min-width: 834px) {
    .li-for-bottle{
      position: relative;

      .drops-container{
        opacity: 1;
        visibility: visible;
        position: absolute;
        margin-left: -50px;
        width: 180px;
        height: 100px;
      }

      .quadratic-poly-bezier-curve-svg2{
        position: absolute;
      }
      
      .fall-parameters {
        /* border: 1px solid blue; */
        height: 90%;
        position: absolute;
        width: 30%;
        left: 20%;
      }

      /* customisable properties */
      .second {
        height: 95%;
        left: 50%;
      }

      .second .droplet {
        animation-delay: 2.7s;
      }

      .second .circle {
        animation-delay: 4.7s;
      }
      /*--------------------------*/

      @keyframes fallAnimation {
        0% {
          top: 22px;
          width: 3px;
          height: 3px;
          transform: translate(0px, 8px);
          opacity: 1;
        }
        20% {
          width: 3px;
          height: 6px;
        }
        40% {
          width: 3px;
          height: 7px;
        }
        80% {
          width: 2px;
          height: 8px;
        }
        90%{
          width: 1px;
          height: 8px;
          opacity: 1;  
        }
        100% {
          top: 95%;
          width: 10px;
          height: 1px;
          opacity: 0;
        }
      }

      .droplet {
        animation: fallAnimation 2s linear infinite;
        animation-delay: 1.8s;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        box-shadow: 0 0 50px 5px #45FFBC;
        background: #B6C3FF;
        position: absolute;
        top: 33px;
        left: -1px;
        right: 0;
        margin: 0 auto;
        opacity: 0;
      }

      .droplet-parameters {
        /* border: 1px solid grey; */
        width: 100%;
        height: 10%;
        position: absolute;
        bottom: 0;
      }

      @keyframes expand {
        from {
          width: 0%;
          height: 0%;
          opacity: 1;
        }
        to {
          width: 100%;
          height: 100%;
          opacity: 0; 
        }
      }

      .circle {
        animation: expand 2s infinite;
        animation-delay: 3.7s;
        opacity: 0;
        border: 1px solid #B6C3FF;
        border-radius: 50%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
`;
