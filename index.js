import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";

import SwipeableTextMobileStepper from "../Summary/HotelGallery";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ScrollComponent from './ScrollComponent';
import CheckAnimation from './CheckAnimation';
import { set, get } from 'dot-prop-immutable';
import Person from '@material-ui/icons/Person';
import Wifi from '@material-ui/icons/Wifi';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { Tv, Layers, Fastfood, CheckCircle, AcUnit } from '@material-ui/icons';
import Button from "@material-ui/core/Button";
import flatten from 'ramda/es/flatten';
import pluck from 'ramda/es/pluck';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import PricePanel from './PricePanel'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 10,
    boxShadow: 'none',
    borderRadius: 0,
  },
  roomOptionTitle: {
    fontWeight: '700'
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
    color: '#d84f57',
  },
  standardColor: {
    color: '#d84f57',
  }
});
export const facilitiesType = {
  'AcUnit': 'Air Conditioning',
  'ArtTrack': 'Sea View',
  'BeachAccess': 'Beach',
  'ChildFriendly': 'Family friendly',
  'FitnessCenter': 'Fitness centre/gym',
  'FreeBreakfast': 'Free Breakfast',
  'Hotel': 'Extra Bed Options',
  'HotTub': 'Hot shower',
  'LocalAirport': 'Near Airport',
  'LocalLaundryService': 'Laundry Service',
  'LocalParking': 'Free secure parking',
  'LocalTaxi': 'Airport Transportation',
  'LocationCity': 'Near city centre',
  'NetworkWifi': 'Free WiFi',
  'Restaurant': 'Restaurant',
  'RoomService': 'Room Service',
  'Security': 'High standard Security protocol',
  'StreetView': 'City view',
  'TV': 'Flat screen TV',
};

export const DynamicIcon = ({ icon, name, classes }) => {
  const IconToRender = require('@material-ui/icons')[icon];
  return IconToRender ? (
    <React.Fragment>
      <IconToRender /> <span className={classes.iconsT}>{name}</span>
    </React.Fragment>
  ) : null;
};


const getPersons = (numberofPerson) => {
  let persons = []
  for (var i = 0; i < numberofPerson; i++) {
    persons.push(<Person />)
  }
  return persons;
}


export class RoomSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.getSelectedRoom = this.getSelectedRoom.bind(this)
  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  getSelectedRoom() {
    let value = ''
    this.props.room.option.map((item, index) => {
      if (item.selected) {
        value = index + 1
      }
    })
    return value
  }

  render() {
    const { room } = this.props;
    return (
      <FormControl style={{ width: '100%' }}>
        <InputLabel htmlFor="demo-controlled-open-select">Select Rooms</InputLabel>
        <Select
          open={this.state.open}
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          value={this.getSelectedRoom()}
          onChange={(event) => {
            let selectedRoom = room;
            let index = event.target.value ? event.target.value - 1 : '';
            selectedRoom.option.map((item, id) => {
              if (id === index) {
                item.selected = true;
                item.H_IDs =
                  item.roomSelected = `${index + 1} x ${selectedRoom.type} Room${index + 1 > 1 ? 's' : ''}`;
              } else {
                item.selected = false
              }
            })
            this.props.selectRoom(this.props.rooms_availability, selectedRoom, this.props.total)
          }}
          inputProps={{
            name: 'room',
            id: 'demo-controlled-open-select',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {this.props.room.option && this.props.room.option.map((option, i) => (
            <MenuItem value={i + 1}>{`${i + 1} for $${(i + 1) * option.price}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

const getSelectedRoom = (room) => {
  let value = 0
  room.option.map((item, index) => {
    if (item.selected) {
      value = index + 1
    }
  })
  return value
}
function RoomOptions(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h5" style={{ padding: 20 }}>
        {props.hotelDetails && props.hotelDetails.rooms ? 'Available Rooms' : null}
        <Divider variant="fullWidth" />
      </Typography>
      {props.hotelDetails && props.hotelDetails.rooms ?
        (<Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <ScrollComponent scrolling={props.scrolling} />
            {props.rooms_availability.map(item => (
              <Paper className={classes.root} elevation={1}>
                <Grid container spacing={2} style={{ position: 'relative' }}>
                  <div className="inner-triangle">
                    {item.option && getSelectedRoom(item) ? (<CheckAnimation />) : null}
                  </div>

                  <Grid item xs={12} sm={4}>
                    <SwipeableTextMobileStepper roomImages={item.roomImages} />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h5" className={props.classes.roomOptionTitle} gutterBottom>
                      {item.type}
                      {/* {item.option.length > 0 && getSelectedRoom(item) ? (<Chip label='Selected' color="primary" size="small" avatar={<Avatar><CheckCircle /></Avatar>} />) : null} */}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Sleeps:({item.personAccomodation}) {getPersons(item.personAccomodation.split(' ')[0])}
                    </Typography>
                    <h4>{item.bedsInfo}</h4>
                    <Typography className={classes.standardColor}>{props.hotelDetails.amenities ? props.hotelDetails.amenities.split("|").map(item => (
                      item ?
                        // <Chip size="medium" label={item} className={classes.chips}/> 
                        <DynamicIcon icon={item} name={facilitiesType[item]} classes={classes} />
                        : ''
                    )) : null}</Typography>
                    <RoomSelect {...props} room={item} />
                    <Button variant="contained" onClick={
                      () => {
                        const room = flatten(pluck('option', props.rooms_availability)).filter(item => item.selected);
                        const from = props.search_dates.value.from;
                        const to = props.search_dates.value.to;

                        const aDay = 1000 * 60 * 60 * 24;

                        var difference_ms = Math.abs(new Date(to).getTime() - new Date(from).getTime());
                        const noOfDaysStay = Math.round(difference_ms / aDay);
                        props.updateRoomSelected({
                          bookingDetails: room,
                          price: props.total.price,
                          checkin: from,
                          checkout: to,
                          noOfDaysInt: noOfDaysStay,
                          noOfDays: `${noOfDaysStay} Night${noOfDaysStay > 1 ? 's' : ''}`,
                          hotelName: props.hotelSummary && props.hotelSummary &&
                            props.hotelSummary.hotelDetails.name,
                          city: props.hotelSummary && props.hotelSummary &&
                            props.hotelSummary.hotelDetails.city,
                          country: props.hotelSummary && props.hotelSummary &&
                            props.hotelSummary.hotelDetails.country,
                          amenities: props.hotelSummary && props.hotelSummary &&
                            props.hotelSummary.hotelDetails.amenities,
                          rating: props.hotelSummary && props.hotelSummary &&
                            props.hotelSummary.hotelDetails.rating,
                        });
                      }
                    }
                      disabled={(item.option.length > 0 && getSelectedRoom(item)) <= 0}
                      style={(item.option.length > 0 && getSelectedRoom(item)) <= 0 ? { marginTop: 26 } : {
                        marginTop: 26,
                        backgroundColor: '#3f51b5',
                        color: '#fff'
                      }}>
                      Continue
                        </Button>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            {props.total.price > 0 ? (<Card>
              <CardHeader
                title={'Booking Summary'}
                subheader={'Price breakup'}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={props.classes.cardHeader}
              />
              <CardContent>
                <PricePanel total={props.total} />
              </CardContent>
              <CardActions>
                <Button variant="contained"
                  size="medium"
                  style={{
                    marginLeft: 30,
                    marginBottom: 30,
                  }}
                  onClick={() => {
                    const room = flatten(pluck('option', props.rooms_availability)).filter(item => item.selected);
                    const from = props.search_dates.value.from;
                    const to = props.search_dates.value.to;

                    const aDay = 1000 * 60 * 60 * 24;

                    var difference_ms = Math.abs(new Date(to).getTime() - new Date(from).getTime());
                    const noOfDaysStay = Math.round(difference_ms / aDay);
                    props.updateRoomSelected({
                      bookingDetails: room,
                      price: props.total.price,
                      checkin: from,
                      checkout: to,
                      noOfDaysInt: noOfDaysStay,
                      noOfDays: `${noOfDaysStay} Night${noOfDaysStay > 1 ? 's' : ''}`,
                      hotelName: props.hotelSummary && props.hotelSummary &&
                        props.hotelSummary.hotelDetails.name,
                      city: props.hotelSummary && props.hotelSummary &&
                        props.hotelSummary.hotelDetails.city,
                      country: props.hotelSummary && props.hotelSummary &&
                        props.hotelSummary.hotelDetails.country,
                      amenities: props.hotelSummary && props.hotelSummary &&
                        props.hotelSummary.hotelDetails.amenities,
                      rating: props.hotelSummary && props.hotelSummary &&
                        props.hotelSummary.hotelDetails.rating,
                    });
                  }}
                  color="primary">
                  Continue
                </Button>
              </CardActions>
            </Card>) : null}
          </Grid>
        </Grid>)
        : null}
    </React.Fragment>
  );
}

RoomOptions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoomOptions);