import PropTypes from 'prop-types';

import { ListElem, Text, Button } from './ElementContact.styled';

const ElementContact = ({
  contactName,
  contactNumber,
  contactId,
  contactDelete,
}) => {
  return (
    <ListElem>
      <Text>
        {contactName}: {contactNumber}
      </Text>
      <Button type="button" onClick={() => contactDelete(contactId)}>
        Delete
      </Button>
    </ListElem>
  );
};
ElementContact.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  contactDelete: PropTypes.func.isRequired,
};

export default ElementContact;
