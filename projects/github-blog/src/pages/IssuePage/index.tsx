import { Card } from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faChevronLeft,
  faCalendarDay,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ContentContainer } from "./styles";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { SearchContext } from "../../contexts/SearchContext";

import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");
export function IssuePage() {
  const { issueNumber } = useParams();
  const { fetchCompleteIssue, completeIssue, userData } =
    useContext(SearchContext);

  useEffect(() => {
    if (Number(issueNumber) !== completeIssue.number) {
      fetchCompleteIssue(Number(issueNumber));
    }
  }, []);

  return (
    <>
      <Card type="profile">
        <Card.Header>
          <Card.Link href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </Card.Link>

          <Card.Link href={completeIssue.html_url} target="_blank">
            <span>Ver no GitHub</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Card.Link>
        </Card.Header>
        <ContentContainer>
          <Card.Title>{completeIssue.title}</Card.Title>

          <Card.Footer>
            <Card.FooterItem>
              <FontAwesomeIcon icon={faGithub} />
              <span>{userData.login}</span>
            </Card.FooterItem>
            <Card.FooterItem>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>{dayjs().to(completeIssue.created_at)}</span>
            </Card.FooterItem>
            <Card.FooterItem>
              <FontAwesomeIcon icon={faComment} />
              <span>{completeIssue.comments} comentários</span>
            </Card.FooterItem>
          </Card.Footer>
        </ContentContainer>
      </Card>
      <ContentContainer>
        <Markdown
          className="markdown"
          children={completeIssue.body}
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          components={{
            code({ node, className, children, ...rest }) {
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={nord}
                  customStyle={{
                    borderRadius: "10px",
                    backgroundColor: "#112131",
                  }}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </ContentContainer>
    </>
  );
}
