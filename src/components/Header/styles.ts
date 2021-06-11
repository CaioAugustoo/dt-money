import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  padding: 2rem 2rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;

    background: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;

    padding: 0 2rem;
    height: 3rem;

    transition: filter .2s;

    &:hover {
      filter: brightness(0.96);
    }
  }
`