import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

//this file is run before each test
Enzyme.configure({ adapter: new EnzymeAdapter() });
