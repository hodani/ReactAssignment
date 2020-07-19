import React, {Component} from 'react';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Listing from './components/Listing';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        fetch("https://randomuser.me/api?nat=us&results=100")
            .then(res => res.json())
            .then(res => res.results
                .map(result => ({
                    ...result,
                    primesInPostcode: this.subNumbers(result.location.postcode).filter(this.isPrime)
                }))
                .filter(result => result.primesInPostcode.length > 1)
            )
            .then(
                results => this.setState({ isLoaded: true, results }),
                error => this.setState({ isLoaded: true, error })
            )
    }


    subNumbers(number){
        let result = [];
        const str = number.toString();

        for (let i = 0; i < str.length; i++)
            for (let j = i + 1; j < str.length + 1; j++)
                result.push(
                    parseInt(str.slice(i, j))
                );

        return [...new Set(result)];
    }

    isPrime(num){
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    render(){
        const {isLoaded, results, error} = this.state;
        return <React.Fragment>
            { !isLoaded && <Loader /> }
            { error && <ErrorMessage error={error} /> }
            { (isLoaded && !error) && <Listing results={results} /> }
        </React.Fragment>
    }
}
