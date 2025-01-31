import { v4 } from 'uuid';

export const CARDSINFO = [
	{
		id: v4(),
		img: 'public/image-daniel.jpg',
		title: 'Daniel Clifford',
		subtitle: 'Verified Graduate',
		principalText:
			'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
		secondText:
			'“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”',
		$cardWidth: '510px',
		$cardHeight: '288px',
		$backgroundColor: '#A775F1',
		$textColor: 'white',
		$gridColum: '1/2',
		$gridRow: '1'
	},
	{
		id: v4(),
		img: 'public/image-jonathan.jpg',
		title: 'Jonathan Walters',
		subtitle: 'Verified Graduate',
		principalText: 'The team was very supportive and kept me motivated',
		secondText:
			'“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “',
		$cardWidth: '255px',
		$cardHeight: '288px',
		$backgroundColor: '#48556A',
		$textColor: 'white',
		$gridColum: '3/4',
		$gridRow: '1'
	},
	{
		id: v4(),
		img: 'public/image-jeanette.jpg',
		title: 'Jeanette Harmon',
		subtitle: 'Verified Graduate',
		principalText: 'An overall wonderful and rewarding experience',
		secondText:
			'“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”',
		$cardWidth: '255px',
		$cardHeight: '266px',
		$backgroundColor: '#FFFFFF',
		$textColor: 'black',
		$gridColum: '1/2',
		$gridRow: '2'
	},
	{
		id: v4(),
		img: 'public/image-patrick.jpg',
		title: 'Patrick Abrams',
		subtitle: 'Verified Graduate',
		principalText:
			'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
		secondText:
			'“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.  ”',
		$cardWidth: '535px',
		$cardHeight: '266px',
		$backgroundColor: '#19202D',
		$textColor: 'white',
		$gridColum: '2/3',
		$gridRow: '2'
	},
	{
		id: v4(),
		img: 'public/image-kira.jpg',
		title: 'Kira Whittle',
		subtitle: 'Verified Graduate',
		principalText: 'Such a life-changing experience. Highly recommended!',
		secondText:
			'“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!  ”',
		$cardWidth: '255px',
		$cardHeight: '594px',
		$backgroundColor: '#FFFFFF',
		$textColor: 'black',
		$gridColum: '4/4',
		$gridRow: '1'
	}
];
