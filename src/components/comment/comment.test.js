import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Comment from './Comment';

configure({ adapter: new Adapter() });

describe('<Comment />', () => {
  let comment;
  const onReplySpy = sinon.spy();

  beforeEach(() => {
    comment = shallow(
      <Comment
        avatar="bob.png"
        author="Bob Smith"
        authorLink="/profile/bob-smith"
        metadata="3 days ago at 5:35pm"
        onReply={onReplySpy}
        replies={[
          <Comment
            avatar="mary.png"
            author="Mary"
            authorLink="/profile/mary"
            metadata="Today at 11:17am"
            onReply={() => {}}
          >
            I agree. Great post!
          </Comment>,
        ]}
      >
        Awesome post! Keep the content coming!
      </Comment>,
    );
  });

  it('Should display an author link', () => {
    expect(comment.find(['data-test-id="comment-author-link"'])).toBeTruthy();
  });

  it('Should not display an author link if authorLink is null', () => {
    comment.setProps({ authorLink: null });
    expect(comment.find('data-test-id="comment-author-link"')).toHaveLength(0);
  });

  it('Should display comment replies', () => {
    expect(comment.find('data-test-id="comment-replies"')).toBeTruthy();
  });

  it('Should trigger onReply callback', () => {
    comment.find('[data-test-id="comment-reply-btn"]').simulate('click');

    expect(onReplySpy.called).toBeTruthy();
  });
});
