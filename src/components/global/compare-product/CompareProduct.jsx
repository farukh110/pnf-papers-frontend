import { LiaTimesSolid } from "react-icons/lia";
import Color from "../controls/colors/Color";

const CompareProduct = () => {
    return (
        <>
            <div className="col-md-3">

                <div className="compare-product-box position-relative">

                    <LiaTimesSolid
                        className="position-absolute cross"
                    />

                    <div className="compare-product-img">

                        <img src="https://pic.made-in-china.com/8f4j00GNEUvroRYVhd/Construction-Products1720170543000.jpg" alt="product 1" />

                    </div>

                    <div className="compare-details p-2">

                        <h1 className="compare-product-title"> Low Price Supplier Frontlit Backlit Flex Banner </h1>

                        <table className="table custom-table table-striped">

                            <tbody>
                                <tr>
                                    <td className="td-label"> Price </td>
                                    <td> <p className="compare-price mb-0"> Rs 6000 </p> </td>
                                </tr>
                                <tr>
                                    <td className="td-label"> Brand </td>
                                    <td> Frontlit </td>
                                </tr>
                                <tr>
                                    <td className="td-label"> Type </td>
                                    <td> Paper </td>
                                </tr>
                                <tr>
                                    <td className="td-label"> SKU </td>
                                    <td> SKU2024 </td>
                                </tr>
                                <tr>
                                    <td className="td-label"> Availability </td>
                                    <td> In Stock </td>
                                </tr>
                                <tr>
                                    <td className="td-label"> Color </td>
                                    <td>
                                        <div className="color-collection">
                                            <Color />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-label"> Size </td>
                                    <td> S - M - L </td>
                                </tr>
                                <tr>
                                    <td className="td-label"> Weight </td>
                                    <td> 50 gram </td>
                                </tr>
                                <tr>
                                    <td className="td-label"> Length </td>
                                    <td> 2 ft </td>
                                </tr>
                                <tr>
                                    <td className="td-label"> Height </td>
                                    <td> 2 ft </td>
                                </tr>
                                <tr>
                                    <td className="td-label"> Width </td>
                                    <td> 2 ft </td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                </div>

            </div>
        </>
    )
}

export default CompareProduct;