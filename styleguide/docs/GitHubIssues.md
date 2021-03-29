```jsx noeditor
import { useEffect, useState } from 'react';
import {
  List,
  ListItem,
  Link,
  Badge,
  Tag,
  Avatar,
  Spinner,
  Alert,
} from '@atomikui/core';

const GitBubIssues = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/atomikui/atomikui-core/issues')
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <Alert className="margin-top-32" theme="error">
        Could not load GitHub issues.
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <div className="margin-top-32 flex flex--align-middle flex--hr-8">
        <Spinner theme="blue" />
        <span>Loading GitHub issues....</span>
      </div>
    );
  }

  if (!isLoading && issues.length === 0) {
    return <div className="margin-top-32">There are no open issues.</div>;
  }

  return (
    <List className="gh-issues-list">
      {issues.map(
        ({ id, html_url, title, body, state, labels, created_at, user }) => (
          <ListItem key={`issue-${id}`}>
            <div
              className="flex flex--hr-16 flex--space-between"
              style={{ flexWrap: 'nowrap' }}
            >
              <div>
                <h3 className="text-size-20" style={{ lineHeight: 1.2 }}>
                  {title}
                </h3>
                <Link
                  className="text-weight-semibold"
                  href={html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {html_url}
                </Link>
                <div className="flex flex--align-middle flex--hr-8 margin-top-16">
                  <Avatar src={user.avatar_url} size="sm" />
                  <div>
                    Created by <b>{user.login}</b> on{' '}
                    <b>{new Date(created_at).toLocaleDateString()}</b>
                  </div>
                </div>
              </div>
              <div className="padding-top-4">
                <Badge label="status" value={state} theme="lime" />
              </div>
            </div>
            <div className="margin-top-16 margin-bottom-16">
              <List className="gh-issues-list__tags">
                {labels.map(({ color, name, default: isDefault }) => (
                  <ListItem key={`label-${id}`}>
                    <Tag
                      shape="pill"
                      style={{
                        background: `#${color}`,
                        color: isDefault ? 'black' : 'white',
                      }}
                    >
                      {name}
                    </Tag>
                  </ListItem>
                ))}
              </List>
            </div>
            <div className="margin-top-16">{body}</div>
          </ListItem>
        ),
      )}
    </List>
  );
};

<GitBubIssues />;
```
