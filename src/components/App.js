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
			<ApprovalCard>
				<CommentDetail author={getAuthor()} time={getTime()} text={getText()} avatar={getAvatar()} />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author={getAuthor()} time={getTime()} text={getText()} avatar={getAvatar()} />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author={getAuthor()} time={getTime()} text={getText()} avatar={getAvatar()} />
			</ApprovalCard>
		</div>
	);
}



export default App;
