# Subscribe to attribute updates. Replace $THINGSBOARD_HOST_NAME and $ACCESS_TOKEN with corresponding values.
coap get -o coap://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/attributes
# For example, $THINGSBOARD_HOST_NAME reference your local installation, $ACCESS_TOKEN is ABC123:
coap get -o coap://localhost/api/v1/ABC123/attributes