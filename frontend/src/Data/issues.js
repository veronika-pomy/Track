import issueModel from '../Models/issueModel';

export function getIssuesData () {
    let data = [];
    data.push(new issueModel({
        _id: 342384848,
        name: 'Crashed when started',
        details: 'Program crashes a new moments after loading.',
        steps: 'Open the app and it will not work',
        version: 'V0.1',
        priority: 1,
        assigned: 'Veronika',
        creator: 'Amy S.',
        time: '19:53'
    }))
    data.push(new issueModel({
        _id: 342384849,
        name: 'Buttons are not working',
        details: 'Can\t click any buttons in the app, no respone.',
        steps: 'Click on any button in the app and it won\'t respond',
        version: 'V4.5',
        priority: 3,
        assigned: 'Veronika',
        creator: 'Tony',
        time: '19:56'
    }))

    // sort data by priority
    let sorted = data.sort((a,b) => {return a.priority - b.priority});

    return sorted;
}