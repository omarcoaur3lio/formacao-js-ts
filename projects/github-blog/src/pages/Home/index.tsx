import { Card } from "../../components/Card";
import { CardProfileContainer, ContentContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SearchForm } from "../../components/SearchForm";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export function Home() {
  const { userData, issues, completeIssue, clearCompleteIssue } =
    useContext(SearchContext);

  return (
    <>
      <Card type="profile">
        <CardProfileContainer>
          <Card.Image src={userData.avatar_url} />
          <div style={{ flex: 1 }}>
            <Card.Header>
              <Card.Title>{userData.name}</Card.Title>
              <Card.Link href={userData.html_url} target="_blank">
                GitHub
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Card.Link>
            </Card.Header>
            <Card.Text>{userData.bio}</Card.Text>
            <Card.Footer>
              <Card.FooterItem>
                <FontAwesomeIcon icon={faGithub} />
                <span>{userData.login}</span>
              </Card.FooterItem>
              <Card.FooterItem>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{userData.company}</span>
              </Card.FooterItem>
              <Card.FooterItem>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{userData.followers} seguidores</span>
              </Card.FooterItem>
            </Card.Footer>
          </div>
        </CardProfileContainer>
      </Card>
      <SearchForm />
      <ContentContainer>
        {issues.map((issue) => (
          <Link
            to={`/post/${issue.number}`}
            key={issue.number}
            style={{ textDecoration: "none" }}
            onClick={() => {
              if (issue.number !== completeIssue.number) {
                clearCompleteIssue();
              }
            }}
          >
            <Card>
              <Card.Header>
                <Card.SubTitle>{issue.title}</Card.SubTitle>
                <Card.Label>{dayjs().to(issue.created_at)}</Card.Label>
              </Card.Header>
              <Card.Text>{issue.body}</Card.Text>
            </Card>
          </Link>
        ))}
      </ContentContainer>
    </>
  );
}
