import React from "react";
import { service } from "../services/index";
import { connect } from "react-redux";
import { getCountriesAction } from "redux/async_functions";
class CountriesPage extends React.Component<any, any> {
  state = { countries: [] };

  componentDidMount() {
    this.props.onGetCountries();
    // service.getCountries().then((res: any) => {
    //   this.setState({ countries: res.data });
    // });
  }
  render() {
    return (
      <div>
        {this.state.countries.map((item: any) => {
          return (
            <div style={{ display: "inline-block" }}>
              <img height={50} width={50} src={item.flag} />{" "}
            </div>
          );
        })}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetCountries: () => {
      dispatch(getCountriesAction());
    }
  };
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesPage);
