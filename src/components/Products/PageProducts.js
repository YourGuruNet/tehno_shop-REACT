import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../../context/products';
import ProductList from './ProductList';
import noResult from '../../images/noResult.png';
const PageProducts = () => {
  const { sorted, page, changePage } = useContext(ProductContext);
  //console.log(sorted);
  return sorted[page] ? (
    <Section>
      <ProductList products={sorted[page]} />
      {sorted.length > 1 && (
        <PageContainer>
          {page > 0 && (
            <button
              className='page_button'
              onClick={() => changePage(page - 1)}
            >
              &#129190;
            </button>
          )}
          {sorted.map((_, index) => {
            return (
              <button
                onClick={() => changePage(index)}
                key={index}
                className={`page_button ${
                  page === index && `page_button-active`
                }`}
              >
                {index + 1}
              </button>
            );
          })}
          {page < sorted.length - 1 && (
            <button
              className='page_button'
              onClick={() => changePage(page + 1)}
            >
              &#129191;
            </button>
          )}
          <div className='under_line' />
        </PageContainer>
      )}
    </Section>
  ) : (
    <NoItemsTitle>
      <img className='noResult' src={noResult} alt='noResult'></img>
    </NoItemsTitle>
  );
};

export default PageProducts;

const PageContainer = styled.div`
  width: 100%;

  .under_line {
    width: 15rem;
    border-top: solid 0.1rem var(--baseColor-Light-2);
    margin: 0.2rem auto;
  }
  .page_button {
    background-color: transparent;
    border-radius: 50%;
    padding: 0.5rem 0.5rem;
    font-size: 2rem;
    margin: 2rem 0.2rem 0 0.2rem;
    border: none;
    color: var(--baseColor-Light-2);
    border: solid 0.01rem transparent;
    transition: 0.3s all;
    outline: none;

    :hover {
      border: solid 0.01rem var(--baseColor-Light-2);
      padding: 0.5rem 1rem;
    }
  }

  .page_button-active {
    background-color: var(--baseColor-Light);
    padding: 0.5rem 1rem;
  }
`;

const NoItemsTitle = styled.h1`
  margin: 0 auto;
  align-self: center;

  .noResult {
    width: 100%;
  }
`;
const Section = styled.section`
  width: 80%;

  @media screen and (max-width: 68.75em) {
    width: 100%;
  }
`;
