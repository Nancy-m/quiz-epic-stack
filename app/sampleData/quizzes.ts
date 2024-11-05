export const QUIZ_STATUS = {
	pending: 'pending',
	active: 'active',
	paused: 'paused',
	completed: 'completed',
} as const

const quizzes = [
	{
		id: 1,
		uid: 'c4ca4238a0b923820dcc509a6f75849b',
		title: 'New Year, New Knowledge',
		description:
			'Kickstart your year with a quiz that will challenge your knowledge and set the tone for a year of learning.',
		availability: {
			start: '2023-01-01T00:00:00.000Z',
			end: '2023-01-31T23:59:59.999Z',
		},
		questionCount: 10,
		passingScore: 70,
		status: QUIZ_STATUS.pending,
	},
	{
		id: 2,
		uid: 'c81e728d9d4c2f636f067f89cc14862c',
		title: 'Quiz 2',
		description: 'Quiz 2 description',
		availability: {
			start: '2023-02-01T00:00:00.000Z',
			end: '2023-02-28T23:59:59.999Z',
		},
		questionCount: 15,
		passingScore: 80,
		status: QUIZ_STATUS.active,
	},
	{
		id: 3,
		uid: 'eccbc87e4b5ce2fe28308fd9f2a7baf3',
		title: 'Quiz 3',
		description: 'Quiz 3 description',
		availability: {
			start: '2023-03-01T00:00:00.000Z',
			end: '2023-03-31T23:59:59.999Z',
		},
		questionCount: 20,
		passingScore: 90,
		status: QUIZ_STATUS.paused,
	},
	{
		id: 4,
		uid: 'a87ff679a2f3e71d9181a67b7542122c',
		title: 'Quiz 4',
		description: 'Quiz 4 description',
		availability: {
			start: '2023-04-01T00:00:00.000Z',
			end: '2023-04-30T23:59:59.999Z',
		},
		questionCount: 25,
		passingScore: 95,
		status: QUIZ_STATUS.completed,
	},
	{
		id: 5,
		uid: 'e4da3b7fbbce2345d7772b0674a318d5',
		title: 'Quiz 5',
		description: 'Quiz 5 description',
		availability: {
			start: '2023-05-01T00:00:00.000Z',
			end: '2023-05-31T23:59:59.999Z',
		},
		questionCount: 30,
		passingScore: 100,
		status: QUIZ_STATUS.pending,
	},
]
export default quizzes
