#### Platform integrations parameters

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
      <tr>
          <td>integrations.statistics.enabled</td>
          <td>INTEGRATIONS_STATISTICS_ENABLED</td>
          <td>true</td>
          <td>Enable/disable integrations statistics</td>
      </tr>
      <tr>
          <td>integrations.statistics.persist_frequency</td>
          <td>INTEGRATIONS_STATISTICS_PERSIST_FREQUENCY</td>
          <td>3600000</td>
          <td></td>
      </tr>
      <tr>
          <td>integrations.reinit.enabled</td>
          <td>INTEGRATIONS_REINIT_ENABLED</td>
          <td>true</td>
          <td></td>
      </tr>
      <tr>
          <td>integrations.reinit.frequency</td>
          <td>INTEGRATIONS_REINIT_FREQUENCY</td>
          <td>300000</td>
          <td></td>
      </tr>
      <tr>
          <td>integrations.allow_Local_network_hosts</td>
          <td>INTEGRATIONS_ALLOW_LOCAL_NETWORK_HOSTS</td>
          <td>true</td>
          <td></td>
      </tr>
      <tr>
          <td>integrations.rpc.enabled</td>
          <td>INTEGRATIONS_RPC_ENABLED</td>
          <td>true</td>
          <td></td>
      </tr>
      <tr>
          <td>integrations.rpc.port</td>
          <td>INTEGRATIONS_RPC_PORT</td>
          <td>9090</td>
          <td></td>
      </tr>
      <tr>
          <td>integrations.rpc.ssl.enabled</td>
          <td>INTEGRATIONS_RPC_SSL_ENABLED</td>
          <td>false</td>
          <td>Enable/disable SSL support</td>
      </tr>
      <tr>
          <td>integrations.rpc.ssl.cert</td>
          <td>INTEGRATIONS_RPC_SSL_CERT</td>
          <td>certChainFile.pem</td>
          <td></td>
      </tr>
      <tr>
          <td>integrations.rpc.ssl.privateKey</td>
          <td>INTEGRATIONS_RPC_SSL_PRIVATE_KEY</td>
          <td>privateKeyFile.pem</td>
          <td></td>
      </tr>
      <tr>
          <td>integrations.rpc.client_max_keep_alive_time_sec</td>
          <td>INTEGRATIONS_RPC_CLIENT_MAX_KEEP_ALIVE_TIME_SEC</td>
          <td>300</td>
          <td>Disconnect a client if no keepalive ping received in the specified time</td>
      </tr>
    </tbody>
</table>

#### Reports parameters

<table>
    <thead>
        <tr>
            <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
        </tr>
    </thead>
    <tbody>
      <tr>
          <td>reports.server.endpointUrl</td>
          <td>REPORTS_SERVER_ENDPOINT_URL</td>
          <td>http://localhost:8383</td>
          <td>Enable/disable integrations statistics</td>
      </tr>
    </tbody>
</table>