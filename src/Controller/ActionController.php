<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\ChartsData;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ActionController extends AbstractController
{
    #[Route('/action', name: 'action')]
    public function index(): Response
    {
        return $this->render('action/index.html.twig', [
            'controller_name' => 'ActionController',
        ]);
    }

    /**
     * @Route("/addaction", name="add_data")
     */
    public function addData(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();

        $allData = $doctrine->getRepository(ChartsData::class)->findAll();

        foreach ($allData as $key => &$val) {
            $data = json_decode($val->getData());
            $clientAnswer = 'Да';
            foreach ($data as &$datum) {
                if ($datum->idc === 2 ){
                    $valDatum = json_decode($datum->value);
                    $tips = json_decode($val->getTips());
                    $statistics = array_combine($tips, $valDatum);
                    $count = $datum->count;
                    array_walk($statistics, function(&$wkey, $wval) use ($clientAnswer, $datum){
                        if ($wval === $clientAnswer){
                            $wkey = $wkey + 1;
                            $datum->count = $datum->count + 1;
                        }
                    });
                    $datum->value = json_encode(array_values($statistics));
                    $val->setData(json_encode($data, JSON_UNESCAPED_UNICODE));
                    $entityManager->persist($val);
                    $entityManager->flush();
                    break;
                }
            }
        }

        $product = new ChartsData();
        $id = $product->getId();


//        // tell Doctrine you want to (eventually) save the Product (no queries yet)
//        $entityManager->persist($product);
//
//        // actually executes the queries (i.e. the INSERT query)
//        $entityManager->flush();

        return new Response('Saved new product with id '.$product->getId());
    }
}
