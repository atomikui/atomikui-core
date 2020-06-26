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

  it('Should render without errors', () => {
    expect(comment.length).toBe(1);
  });

  it('Should display an author link', () => {
    expect(comment.find('Link').length).toBe(1);
  });

  it('Should not display an author link if authorLink is null', () => {
    comment.setProps({ authorLink: null });
    expect(comment.find('Link').length).toBe(0);
  });

  it('Should display comment replies', () => {
    expect(comment.find('.atomikui-comment__replies').length).toBe(1);
  });

  it('Should trigger onReply callback', () => {
    comment.find('.atomikui-comment__reply-btn').simulate('click');

    expect(onReplySpy.called).toBe(true);
  });
});
