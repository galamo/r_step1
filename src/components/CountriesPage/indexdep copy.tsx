import React from "react";
import { service } from "../services/index";
export class CountriesPage extends React.Component<any, any> {
  state = { countries: [] };

  componentDidMount() {
    service.getCountries().then((res: any) => {
      this.setState({ countries: res.data });
    });
  }
  render() {
    return (
      <div>
        {this.state.countries.map((item: any) => {
          return (
            <div>
              <img height={50} width={50} src={item.flag} />{" "}
            </div>
          );
        })}
      </div>
    );
  }
}
