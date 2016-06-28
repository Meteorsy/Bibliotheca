class ExSelectList extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        jQuery('.ExSelect').select2({
            placeholder: 'Select the book',
            allowClear: true
        }).on('select2-open', function() {
            jQuery(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
        });
    }

    render() {
        return (
            <div className="form-group">
                <label className="col-sm-1 control-label">{this.props.labelName}</label>
                <div className="col-margin-7 col-sm-10">
                    <div className="input-group col-sm-12">
                        <select className="form-control ExSelect" name={this.props.names}>
                            <option> </option>
                            <optgroup label="North America">
                                <option>Alabama</option>
                                <option>Alaska</option>
                                <option>Arizona</option>
                                <option>Arkansas</option>
                                <option>California</option>
                                <option>Colorado</option>
                                <option>Connecticut</option>
                                <option>Delaware</option>
                                <option>Florida</option>
                                <option>Georgia</option>
                                <option>Hawaii</option>
                                <option>Idaho</option>
                                <option>Illinois</option>
                                <option>Indiana</option>
                                <option>Iowa</option>
                                <option>Kansas</option>
                                <option>Kentucky[C]</option>
                                <option>Louisiana</option>
                                <option>Maine</option>
                                <option>Maryland</option>
                                <option>Massachusetts[D]</option>
                                <option>Michigan</option>
                                <option>Minnesota</option>
                                <option>Mississippi</option>
                                <option>Missouri</option>
                                <option>Montana</option>
                                <option>Nebraska</option>
                                <option>Nevada</option>
                                <option>New Hampshire</option>
                                <option>New Jersey</option>
                                <option>New Mexico</option>
                                <option>New York</option>
                                <option>North Carolina</option>
                                <option>North Dakota</option>
                                <option>Ohio</option>
                                <option>Oklahoma</option>
                                <option>Oregon</option>
                                <option>Pennsylvania[E]</option>
                                <option>Rhode Island[F]</option>
                                <option>South Carolina</option>
                                <option>South Dakota</option>
                                <option>Tennessee</option>
                                <option>Texas</option>
                                <option>Utah</option>
                                <option>Vermont</option>
                                <option>Virginia[G]</option>
                                <option>Washington</option>
                                <option>West Virginia</option>
                                <option>Wisconsin</option>
                                <option>Wyoming</option>
                            </optgroup>
                            <optgroup label="Europe">
                                <option>Albania</option>
                                <option>Andorra</option>
                                <option>Armenia</option>
                                <option>Austria</option>
                                <option>Azerbaijan</option>
                                <option>Belarus</option>
                                <option>Belgium</option>
                                <option>Bosnia & Herzegovina</option>
                                <option>Bulgaria</option>
                                <option>Croatia</option>
                                <option>Cyprus</option>
                                <option>Czech Republic</option>
                                <option>Denmark</option>
                                <option>Estonia</option>
                                <option>Finland</option>
                                <option>France</option>
                                <option>Georgia</option>
                                <option>Germany</option>
                                <option>Greece</option>
                                <option>Hungary</option>
                                <option>Iceland</option>
                                <option>Ireland</option>
                                <option>Italy</option>
                                <option>Kosovo</option>
                                <option>Latvia</option>
                                <option>Liechtenstein</option>
                                <option>Lithuania</option>
                                <option>Luxembourg</option>
                                <option>Macedonia</option>
                                <option>Malta</option>
                                <option>Moldova</option>
                                <option>Monaco</option>
                                <option>Montenegro</option>
                                <option>The Netherlands</option>
                                <option>Norway</option>
                                <option>Poland</option>
                                <option>Portugal</option>
                                <option>Romania</option>
                                <option>Russia</option>
                                <option>San Marino</option>
                                <option>Serbia</option>
                                <option>Slovakia</option>
                                <option>Slovenia</option>
                                <option>Spain</option>
                                <option>Sweden</option>
                                <option>Switzerland</option>
                                <option>Turkey</option>
                                <option>Ukraine</option>
                                <option>United Kingdom</option>
                                <option>Vatican City (Holy See)</option>
                            </optgroup>
                            <optgroup label="Asia">
                                <option>Afghanistan</option>
                                <option>Bahrain</option>
                                <option>Bangladesh</option>
                                <option>Bhutan</option>
                                <option>Brunei</option>
                                <option>Cambodia</option>
                                <option>China</option>
                                <option>East Timor</option>
                                <option>India</option>
                                <option>Indonesia</option>
                                <option>Iran</option>
                                <option>Iraq</option>
                                <option>Israel</option>
                                <option>Japan</option>
                                <option>Jordan</option>
                                <option>Kazakhstan</option>
                                <option>Korea North</option>
                                <option>Korea South</option>
                                <option>Kuwait</option>
                                <option>Kyrgyzstan</option>
                                <option>Laos</option>
                                <option>Lebanon</option>
                                <option>Malaysia</option>
                                <option>Maldives</option>
                                <option>Mongolia</option>
                                <option>Myanmar (Burma)</option>
                                <option>Nepal</option>
                                <option>Oman</option>
                                <option>Pakistan</option>
                                <option>The Philippines</option>
                                <option>Qatar</option>
                                <option>Russia</option>
                                <option>Saudi Arabia</option>
                                <option>Singapore</option>
                                <option>Sri Lanka</option>
                                <option>Syria</option>
                                <option>Taiwan</option>
                                <option>Tajikistan</option>
                                <option>Thailand</option>
                                <option>Turkey</option>
                                <option>Turkmenistan</option>
                                <option>United Arab Emirates</option>
                                <option>Uzbekistan</option>
                                <option>Vietnam</option>
                                <option>Yemen</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExSelectList;