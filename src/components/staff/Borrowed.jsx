import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Page = styled.section`
  border-radius: 0%;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  color: white;
  overflow: hidden;
  background: linear-gradient(to bottom, #e6f7f6, #00e5ee);

  @media (max-width: 100%) {
    padding: 16px;
  }

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

const Header = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: black;
`;
const TopBar = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 34px;
  height: 34px;

  @media (max-width: 600px) {
    width: 28px;
    height: 28px;
  }
`;

const BooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 768px) {
    max-width: 900px;
    margin: 0 auto;
  }
`;

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BookMain = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const BookImage = styled.img`
  width: 90px;
  height: auto;
  border-radius: 4px;
`;

const BookDetails = styled.div`
  flex: 1;
`;

const BookTitle = styled.p`
  font-size: 14px;
  color: #b00000;
  text-decoration: underline;
  margin-bottom: 10px;
`;

const DueWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const DueText = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000;

  span {
    background: #e0e0e0;
    padding: 2px 6px;
    border-radius: 4px;
    margin-left: 5px;
  }
`;

const BorrowedPage = () => {
  const location = useLocation();
  const [borrowedBooks, setBorrowedBooks] = useState(
    JSON.parse(localStorage.getItem("borrowers")) || []

  );
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const borrowers = JSON.parse(localStorage.getItem("borrowers")) || [];
  
    if (!user) return;
  
    const myBooks = borrowers.filter(
      (item) => item.user.email === user.email
    );
  
    setBorrowedBooks(myBooks);
  }, []);
  

  
  if (borrowedBooks.length === 0) {
    return (
      <Page>
        <Header>No borrowed books yet.</Header>
      </Page>
    );
  }

  return (
    <Page>
      <TopBar>
        <Left>
          <Logo src="/logo.png" alt="Logo" />
        </Left>
      </TopBar>
      <Header>
  <Link
    to="/students/dashboard"
    className="hover:underline cursor-pointer"
  >
    <strong>Borrowed Books</strong>
  </Link>
</Header>

      <BooksContainer>
      {borrowedBooks.map((item) => (
  <BookCard key={item.borrowId}>
    <BookMain>
      <BookImage
        src={item.book.cover || "/Rectangle 37.png"}
        alt={item.book.title}
      />
      <BookDetails>
        <BookTitle>
          <strong>{item.book.title}</strong>
        </BookTitle>
        <p>{item.book.author}</p>
      </BookDetails>
    </BookMain>

    <DueWrapper>
      <DueText>
        Due{" "}
        <span>
          {new Date(item.dueDate).toLocaleDateString()}
        </span>
      </DueText>
    </DueWrapper>
  </BookCard>
))}

      </BooksContainer>
    </Page>
  );
};

export default BorrowedPage;
