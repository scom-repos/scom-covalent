import { Module, customModule, Container } from '@ijstech/components';
import ScomCovalent from '@scom/scom-covalent';

@customModule
export default class Module1 extends Module {
    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    async init() {
        super.init();
    }

    render() {
        return <i-vstack gap={10} padding={{ top: 20, bottom: 20 }} verticalAlignment="center" horizontalAlignment="center">
            <i-label caption="Covalent 1" font={{ size: '16px', bold: true }} />
            <i-scom-covalent
                id="scomCovalentElm"
                margin={{ left: 'auto', right: 'auto', bottom: 20 }}
            />

            <i-label caption="Covalent 2" font={{ size: '16px', bold: true }} />
            <i-scom-covalent
                margin={{ left: 'auto', right: 'auto' }}
                componentId={0}
                endpoint="cq/covalent/app/balancer/markets"
                options={{
                    "title": "Balancer Markets - TVL",
                    "counterColName": "tvl_quote",
                    "counterLabel": "TVL Quote"
                }}
                tag={{
                    "counterNumberColor": '#b12b2b',
                    "counterLabelColor": '#f0310f'
                }}
            />
            <i-modal id="mdConfig" width={1000}>
                <i-panel id="pnlConfig" />
            </i-modal>
        </i-vstack>
    }
}