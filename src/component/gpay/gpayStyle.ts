import { css } from 'lit-element';

export const gpayStyle = css`
  .gpay-card-info-container {
    padding: 0;
    position: relative;
    min-width: 240px;
    height: 40px;
    min-height: 40px;
    border-radius: 4px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    cursor: pointer;
    border: 0px;
  }

  .gpay-card-info-container.black,
  .gpay-card-info-animation-container.black {
    background-color: #000;
    box-shadow: none;
  }

  .gpay-card-info-container.white,
  .gpay-card-info-animation-container.white {
    background-color: #fff;
  }

  .gpay-card-info-container.black.active {
    background-color: #5f6368;
  }

  .gpay-card-info-container.black.hover,
  .gpay-card-info-animation-container.black.hover {
    background-color: #3c4043;
  }

  .gpay-card-info-container.white.active {
    background-color: #fff;
  }

  .gpay-card-info-container.white.focus {
    box-shadow: #e8e8e8 0 1px 1px 0, #e8e8e8 0 1px 3px;
  }

  .gpay-card-info-container.white.hover,
  .gpay-card-info-animation-container.white.hover {
    background-color: #f8f8f8;
  }

  .gpay-card-info-iframe {
    border: 0;
    display: block;
    height: 40px;
    margin: auto;
    max-width: 100%;
    width: 240px;
  }

  .gpay-card-info-container-fill .gpay-card-info-iframe {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .gpay-card-info-container-fill,
  .gpay-card-info-container-fill > .gpay-card-info-container {
    width: 100%;
    height: inherit;
  }

  .gpay-card-info-container-fill .gpay-card-info-placeholder-container {
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 3px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .gpay-card-info-container-fill .gpay-card-info-placeholder-svg-container {
    position: relative;
    width: 60%;
    height: inherit;
    max-height: 80%;
    margin-right: -20%;
  }

  .gpay-card-info-container-fill
    .gpay-card-info-placeholder-svg-container
    > svg {
    position: absolute;
    left: 0;
    height: 100%;
    max-width: 100%;
  }

  .gpay-card-info-animation-container {
    display: flex;
    width: 100%;
    position: absolute;
    z-index: 100;
    height: 40px;
    border-radius: 4px;
  }

  .gpay-card-info-placeholder-container {
    display: flex;
    width: 240px;
    height: 100%;
    margin: auto;
  }

  .gpay-card-info-animated-progress-bar-container {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
  }

  .gpay-card-info-animated-progress-bar {
    border-radius: 4px 4px 0px 0px;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-name: gpayProgressFill;
    animation-timing-function: cubic-bezier(0.97, 0.33, 1, 1);
    background: #caccce;
    width: 100%;
    height: 3px;
    max-height: 3px;
  }

  .gpay-card-info-animated-progress-bar-indicator {
    border-radius: 4px 4px 0px 0px;
    max-width: 20px;
    min-width: 20px;
    height: 3px;
    max-height: 3px;
    background: linear-gradient(to right, #caccce 30%, #acaeaf 60%);
    animation-delay: 0.5s;
    animation-duration: 1.7s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: gpayPlaceHolderShimmer;
  }

  .gpay-card-info-iframe-fade-in {
    animation-fill-mode: forwards;
    animation-duration: 0.6s;
    animation-name: gpayIframeFadeIn;
  }

  .gpay-card-info-animation-container-fade-out {
    animation-fill-mode: forwards;
    animation-duration: 0.6s;
    animation-name: gpayPlaceHolderFadeOut;
  }

  .gpay-card-info-animation-gpay-logo {
    margin: 13px 7px 0px 39px;
    background-origin: content-box;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 17px;
    max-height: 17px;
    max-width: 41px;
    min-width: 41px;
  }

  .gpay-card-info-animation-gpay-logo.black {
    background-image: url('https://www.gstatic.com/instantbuy/svg/dark_gpay.svg');
  }

  .gpay-card-info-animation-gpay-logo.white {
    background-image: url('https://www.gstatic.com/instantbuy/svg/light_gpay.svg');
  }

  @keyframes gpayPlaceHolderShimmer {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: calc(100% - 20px);
    }
  }

  @keyframes gpayIframeFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes gpayPlaceHolderFadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  @keyframes gpayProgressFill {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  .gpay-card-info-container-fill .gpay-card-info-animation-container {
    top: 0;
    width: 100%;
    height: 100%;
  }

  .gpay-card-info-container-fill .gpay-card-info-animation-gpay-logo {
    background-position: right;
    margin: 0 0 0 0;
    max-width: none;
    width: 25%;
    height: inherit;
    max-height: 50%;
  }
`;
