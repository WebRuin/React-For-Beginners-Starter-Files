import styled from 'styled-components';

export const StyledOrder = styled.div`
  border: 2px solid #793817;

  ul li {
    border-bottom: 1px solid #dfa456;
    padding: 2rem 5px;
    font-size: 1.4rem;
    background: rgba(255, 255, 255, 0.6);
  }

  ul li:hover {
    background: #f1c1d9;
    color: #ff81c1;
  }

  ul li:hover > .total {
    padding-right: 10px;
  }
  ul li:hover button {
    display: inline;
  }
  ul li button {
    border: 0;
    display: none;
    line-height: 1;
    padding: 0;
  }
  ul li.unavailable {
    text-decoration: line-through;
    background: #f8d0d2;
  }
  ul li .price {
    font-size: 1.2rem;
  }
  ul li .sandwich {
    width: 100%;
    display: grid;
    grid-template-columns: 20px auto auto;
  }

  ul li span.count {
    position: relative;
    overflow: hidden;
    float: left;
  }
  ul li span.count span {
    display: inline-block;
  }
  .total {
    text-align: right;
  }
  .order-title {
    text-align: center;
  }

  .order-enter {
    transform: translateX(-120%);
    transition: 0.5s;
    max-height: 0;
    padding: 0 !important;

    &.order-enter-active {
      max-height: 60px;
      transform: translateX(0);
      padding: 2rem 0 !important;
    }
  }

  .order-exit {
    transition: 0.5s;
    transform: translateX(0);

    &.order-exit-active {
      transform: translateX(120%);
      padding: 0;
    }
  }

  .count-enter {
    background: red;
    transition: 0.25s;
    transform: translateY(100%);

    &.count-enter-active {
      background: yellow transform translateY(0);
    }
  }

  .count-exit {
    transform: translateY(0);
    transition: 0.25s;
    position: absolute;
    left: 0;
    bottom: 0;

    &.count-exit-active {
      transform: translateY(-100%) scale(1.5);
    }
  }

  .delete {
    position: absolute;
    right: 30px;
    color: #ae0e60;
  }
`;

export const StyledEmptyOrder = styled.div`
  font-size: 1.25rem;
  padding: 1rem;
  /* color: #fff; */
  background: #ae0e601c;
`;

export const StyledOrderTotal = styled.div`
  color: #fff;
  padding: 2rem 0;
  font-size: 1.4rem;
  background: #ae0e60bf;
  padding-right: 5px;

  & strong {
    float: right;
  }
`;
