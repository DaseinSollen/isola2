<?php

namespace App\Tables;

use App\Models\Device;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use LaravelIdea\Helper\App\Models\_IH_Device_QB;
use ProtoneMedia\Splade\AbstractTable;
use ProtoneMedia\Splade\SpladeTable;

class DevicesTable extends AbstractTable
{
    /**
     * Create a new instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the user is authorized to perform bulk actions and exports.
     *
     * @param Request $request
     * @return bool
     */
    public function authorize(Request $request): bool
    {
        return true;
    }

    /**
     * The resource or query builder.
     *
     * @return _IH_Device_QB|Builder
     */
    public function for(): _IH_Device_QB|Builder
    {
        return Device::query();
    }

    /**
     * Configure the given SpladeTable.
     *
     * @param SpladeTable $table
     * @return void
     */
    public function configure(SpladeTable $table): void
    {
        $table
            ->withGlobalSearch(columns: ['name','ip_address','serial','uuid'])
            ->column(key: 'name',label: 'Nome',sortable: true)
            ->column(key: 'ip_address', label: 'Indirizzo IP',sortable: true)
            ->column(key: 'uuid', label: 'Identificativo', sortable: true)
            ->column(key: 'serial', label: 'Seriale',sortable: true)
            ->column(label: 'Actions');

            // ->searchInput()
            // ->selectFilter()
            // ->withGlobalSearch()

            // ->bulkAction()
            // ->export()
    }
}
