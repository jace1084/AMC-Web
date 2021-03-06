import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CryptoRankings from '../../CryptosRanking';
// import { _loadDeals } from "../../../services/DealServices";
import './Deals.css';
import Layout from "../../Layout"
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { _loadDeals } from "../../../actions/dealsActions";

class Deals extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     deals: []
  //   };
  // }


  //Another way to fetch api with promise using es6 syntax so we can call multiple api routes
  componentDidMount() {
    // return _loadDeals(localStorage.getItem('token'))
    //   .then(result => this.setState({
    //     deals: result.deals
    //   }))
    this.props.dispatch(_loadDeals(localStorage.getItem('token')));
  }

  convertToPercentage = (priceInDollar, priceInCrypto) => {
    return parseInt(((priceInDollar - priceInCrypto) / priceInDollar) * 100)
  }

  render() {
    const { error, loading, deals } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }


    return (
      <div>
        <Layout/>
        <div className="venues-content">
          <CryptoRankings />

          <div id="right" className="grid">
            {deals && deals.map(deal => (
              <div key={deal.id} className="deal">
                <Link to={`/feed/deals/${deal.deal_name}`} style={{ textDecoration: 'none', color: "black" }} >

                    <div className="deal-info">
                      <img className="deal-image" src={deal.featured_deal_image} alt="deal"/>
                      <div className="mt-1">{deal.deal_name}</div>
                      <small className="deal-description">{deal.deal_description}</small>
                      <div><small>Offered by: {deal.venue_name}</small></div>
                    </div>

                    <div className="deal-price">
                      <div className="price-differ">
                        <div>
                          <div className="purchase-method">Dollar</div>
                          <div>${deal.pay_in_dollar}</div>
                        </div>
                        <div>
                          <div className="purchase-method">Cryptocurrency</div>
                          <strong className="pay_in_crypto">${deal.pay_in_crypto}
                          <small className="discount">{this.convertToPercentage(deal.pay_in_dollar, deal.pay_in_crypto)}% OFF</small>
                          </strong>
                        </div>
                      </div>
                    </div>

                </Link>
              </div>

            ))}
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deals: state.matchedDeals.deals,
  loading: state.matchedDeals.loading,
  error: state.matchedDeals.error
});


export default connect(mapStateToProps)(Deals);
