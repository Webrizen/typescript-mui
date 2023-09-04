import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FollowUp() {
    const accordionStyle = {
        boxShadow: 'none',
        borderTop: '0.1px solid silver',
        borderBottom: '0.1px solid silver',
        minWidth: "30vw",
    };

    return (
        <div>
            <Accordion style={accordionStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Follow-up Call Settings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ padding: '0' }}>
                        <span style={{ fontSize: '16px', fontWeight: "bold" }}>First Follow-up Call on</span>
                        <div className='Custom-follow-up'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
                                <TimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div style={{ padding: '0', marginTop: "10px" }}>
                        <span style={{ fontSize: '16px', fontWeight: "bold" }}>Second Follow-up Call on</span>
                        <div className='Custom-follow-up'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
                                <TimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                            </LocalizationProvider>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}