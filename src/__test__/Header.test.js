import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Components/Header/Header';

it('Test Header renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Header />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
