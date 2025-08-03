import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../api/axios";
interface SearchContextType {
  userData: GitHubUser;
  issues: Issue[];
  completeIssue: Issue;
  fetchIssues: (query?: string) => Promise<void>;
  fetchCompleteIssue: (issue: number) => Promise<void>;
  clearCompleteIssue: () => void;
}

export const SearchContext = createContext({} as SearchContextType);

interface SearchProviderProps {
  children: ReactNode;
}

interface GitHubUser {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
  html_url: string;
}

interface Issue {
  title: string;
  body: string;
  number: number;
  created_at: string;
  html_url: string;
  comments?: number;
}
export function SearchProvider({ children }: SearchProviderProps) {
  const [userData, setUserData] = useState({} as GitHubUser);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [completeIssue, setCompleteIssue] = useState({} as Issue);

  const GITHUBUSERNAME = import.meta.env.VITE_USER_LOGIN;
  const GITHUBREPONAME = import.meta.env.VITE_REPO_NAME;

  useEffect(() => {
    fetchUserData();
    fetchIssues();
  }, []);

  async function fetchUserData() {
    const { data } = await api.get(`/users/${GITHUBUSERNAME}`);

    if (!data) {
      return;
    }

    setUserData({
      avatar_url: data.avatar_url,
      name: data.name,
      bio: data.bio,
      login: data.login,
      company: data.company,
      followers: data.followers,
      html_url: data.html_url,
    });
  }

  const fetchIssues = useCallback(async (query = "") => {
    const response = await api.get(`search/issues`, {
      params: {
        q: query + ` repo:${GITHUBUSERNAME}/${GITHUBREPONAME}`,
      },
    });
    setIssues(response.data.items);
  }, []);

  const fetchCompleteIssue = useCallback(async (issueNumber: number) => {
    const response = await api.get(
      `repos/${GITHUBUSERNAME}/${GITHUBREPONAME}/issues/${issueNumber}`
    );
    setCompleteIssue({
      title: response.data.title,
      body: response.data.body,
      number: response.data.number,
      created_at: response.data.created_at,
      comments: response.data.comments,
      html_url: response.data.html_url,
    });
  }, []);

  function clearCompleteIssue() {
    setCompleteIssue({} as Issue);
  }

  return (
    <SearchContext.Provider
      value={{
        userData,
        issues,
        fetchCompleteIssue,
        completeIssue,
        clearCompleteIssue,
        fetchIssues,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
