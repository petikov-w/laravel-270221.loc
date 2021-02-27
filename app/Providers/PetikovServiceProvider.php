<?php
    namespace App\Providers;
    use Illuminate\Support\ServiceProvider;

    class PetikovServiceProvider extends ServiceProvider{

        public function register()
        {
            parent::register();
            $this->app->bind('MyFunctions','App\Services\MyFunctions');
        }


    }
