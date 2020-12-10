import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';



const App = () => {
	const getAuthor = () => {
		return faker.name.firstName();
	}

	const getTime = () => {
		const timestamp = faker.time.recent();
		return new Date(timestamp).toDateString();
	}

	const getText = () => {
		return faker.lorem.lines();
	}

	const getAvatar = () => {
		return faker.image.image();
	}


	return (
		<div className="ui container comments">
			<h1 className="ui header">Comments Page</h1>
			<p>This is a very simple React app using only function-based components. 
				The cards are built with Semantic UI, and random content is generated with Faker.</p>
			<div className="ui hidden divider" />
			<ApprovalCard>
				<CommentDetail author={getAuthor()} time={getTime()} text={getText()} avatar={getAvatar()} />
			</ApprovalCard>
			<div className="ui hidden divider" />
			<ApprovalCard>
				<CommentDetail author={getAuthor()} time={getTime()} text={getText()} avatar={getAvatar()} />
			</ApprovalCard>
			<div className="ui hidden divider" />
			<ApprovalCard>
				<CommentDetail author={getAuthor()} time={getTime()} text={getText()} avatar={getAvatar()} />
			</ApprovalCard>
			<div className="ui hidden divider" />
		</div>
	);
}



export default App;
