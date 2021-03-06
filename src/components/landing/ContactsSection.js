import React from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter, faDribbble } from "@fortawesome/free-brands-svg-icons"

const useStyles = makeStyles(theme => createStyles({
    section: {
        backgroundColor: '#2978A0',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center'
    },
    sectionHeading: {
        textTransform: 'uppercase',
        marginBottom: '1.5rem',
        fontSize: '1.5rem',
        fontWeight: 700,
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    },
    addressInfo: {
        fontSize: '1.25rem',
        fontWeight: '300',
        lineHeight: '1.75',
        fontFamily: "'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    },
    phoneNumber: {
        fontFamily: "'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        marginBottom: '1rem'
    },
    socialHeading: {
        textTransform: 'uppercase',
        fontWeight: 700,
        fontSize: '1.25rem',
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        marginBottom: '1.5rem'
    },
    socialButton: {
        border: '1px solid white',
        borderRadius: '50%',
        display: 'inline-flex',
        width: '3.25rem',
        height: '3.25rem',
        fontSize: '1.25rem',
        fontWeight: '700',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        margin: '4px',
        '&:hover': {
            color: 'black',
            backgroundColor: 'white',
        }
    }
}))

const ContactsSection = props => {
    const classes = useStyles()

    return (
        <div id="contact" className={classes.section}>
            <Container>
                <Grid container>
                    <Grid item lg={4}>
                        <Typography variant="h4" className={classes.sectionHeading}>Контакты</Typography>
                        <Typography className={classes.addressInfo}>г. Алматы, <br/> ул. Манаса 34/1</Typography>
                        <Typography className={classes.phoneNumber}>+77877718877</Typography>
                        <Typography variant="h5" className={classes.socialHeading}>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</Typography>
                        <a className={classes.socialButton}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a className={classes.socialButton}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className={classes.socialButton}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a className={classes.socialButton}>
                            <FontAwesomeIcon icon={faDribbble} />
                        </a>
                    </Grid>
                    <Grid item lg={8}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.778690465226!2d76.90769551576157!3d43.23509947913778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883692f027581ad%3A0x2426740f56437e63!2z0JzQtdC20LTRg9C90LDRgNC-0LTQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3Ri9GFINGC0LXRhdC90L7Qu9C-0LPQuNC5!5e0!3m2!1sru!2skz!4v1578856976478!5m2!1sru!2skz" width="600" height="450" frameBorder="0" style={{border:'0'}} allowFullScreen=""></iframe>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ContactsSection